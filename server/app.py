from config import app, db, migrate 

from models import User, Trip, Review, Destination
from routes.user_routes import user_routes

app.register_blueprint(user_routes, url_prefix='/api')

if __name__ == "__main__":
    app.run(debug=True, port=5555)




