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
@review_routes.route('/reviews', methods=['GET'])
def get_reviews():
    reviews = Review.query.all()
    return jsonify([review.to_dict() for review in reviews])
@review_routes.route('/reviews/<int:id>', methods=['GET'])
def get_review(id):
    review = Review.query.get(id)
    if not review:
        return jsonify({"error": "Review not found"}), 404
    return jsonify(review.to_dict())

