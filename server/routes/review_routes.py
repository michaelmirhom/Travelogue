from flask import Blueprint, jsonify, request
from config import db
from models import Review

review_routes = Blueprint('review_routes', __name__)
