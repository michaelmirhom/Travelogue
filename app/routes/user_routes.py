# app/routes/user_routes.py

from flask import Blueprint, jsonify, request
from app import db
from app.models import User

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
