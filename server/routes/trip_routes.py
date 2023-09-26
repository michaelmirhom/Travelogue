from flask import Blueprint, jsonify, request
from config import db
from models import Trip

trip_routes = Blueprint('trip_routes', __name__)

@trip_routes.route('/trips', methods=['POST'])
def create_trip():
    data = request.get_json()
    new_trip = Trip(
        destination=data['destination'],
        start_date=data.get('start_date'),
        end_date=data.get('end_date'),
        photos=data.get('photos'),
        description=data.get('description'),
        user_id=data['user_id']
    )
    db.session.add(new_trip)
    db.session.commit()
    return jsonify(new_trip.to_dict()), 201
@trip_routes.route('/trips', methods=['GET'])
def get_trips():
    trips = Trip.query.all()
    return jsonify([trip.to_dict() for trip in trips])
@trip_routes.route('/trips/<int:id>', methods=['GET'])
def get_trip(id):
    trip = Trip.query.get(id)
    if not trip:
        return jsonify({"error": "Trip not found"}), 404
    return jsonify(trip.to_dict())