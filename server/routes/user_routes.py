from flask import Blueprint, jsonify, request
from config import db
from models import User

user_routes = Blueprint('user_routes', __name__)

@user_routes.route('/users', methods=['POST'])
def create_user():
    data = request.get_json()
    new_user = User(
        username=data['username'],
        email=data['email'],
        password_hash=data['password_hash']  
    )
    db.session.add(new_user)
    db.session.commit()
    return jsonify(new_user.to_dict()), 201


@user_routes.route('/users', methods=['GET'])
def get_users():
    users = User.query.all()
    return jsonify([user.to_dict() for user in users])

@user_routes.route('/users/<int:id>', methods=['GET'])
def get_user(id):
    user = User.query.get(id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    return jsonify(user.to_dict())

@user_routes.route('/users/<int:id>', methods=['PUT'])
def update_user(id):
    user = User.query.get(id)
    if not user:
        return jsonify({"error": "User not found"}), 404
    data = request.json
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
    if 'username' in data and data['username']:
        existing_user = User.query.filter_by(username=data['username']).first()
        if existing_user and existing_user.id != id:
            return jsonify({"error": "Username is already taken"}), 400
        user.username = data['username']

    if 'email' in data and data['email']:
        existing_user = User.query.filter_by(email=data['email']).first()
        if existing_user and existing_user.id != id:
            return jsonify({"error": "Email is already in use"}), 400
        user.email = data['email']

    if 'password' in data and data['password']:
        user.set_password(data['password'])  

    db.session.commit()

    return jsonify(user.to_dict()), 200

  

    
