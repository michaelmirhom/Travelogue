# app/routes/user_routes.py

from flask import Blueprint, jsonify, request
from app import db
from app.models import User

user_routes = Blueprint('user_routes', __name__)