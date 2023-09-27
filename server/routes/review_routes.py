from flask import Blueprint, jsonify, request
from config import db
from models import Review

review_routes = Blueprint('review_routes', __name__)
@review_routes.route('/reviews', methods=['POST'])
def create_review():
    data = request.get_json()
    new_review = Review(
        content=data['content'],
        rating=data['rating'],
        user_id=data['user_id'],
        trip_id=data.get('trip_id'),
        destination_id=data.get('destination_id')
    )
    db.session.add(new_review)
    db.session.commit()
    return jsonify(new_review.to_dict()), 201
