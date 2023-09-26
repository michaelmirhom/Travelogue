
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from server.config import db


app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///instance/travelogue.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False


db.init_app(app)
migrate = Migrate(app, db)


from server.models import User, Trip, Review, Destination
from server.routes.user_routes import user_routes

app.register_blueprint(user_routes, url_prefix='/api')


if __name__ == "__main__":
    app.run(debug=True, port=5555)


