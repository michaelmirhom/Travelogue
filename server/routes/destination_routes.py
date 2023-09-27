from flask import Blueprint, jsonify, request
from config import db
from models import Destination

destination_routes = Blueprint('destination_routes', __name__)

@destination_routes.route('/destinations', methods=['POST'])
def create_destination():
    data = request.get_json()
    new_destination = Destination(
        name=data['name'],
        country=data['country'],
        attractions=data.get('attractions')
    )
    db.session.add(new_destination)
    db.session.commit()
    return jsonify(new_destination.to_dict()), 201