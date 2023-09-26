from flask import Blueprint, jsonify, request
from config import db
from models import Trip

trip_routes = Blueprint('trip_routes', __name__)