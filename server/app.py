from config import app, db, migrate 


from models import User, Trip, Review, Destination
from routes.trip_routes import trip_routes
from routes.review_routes import review_routes
from routes.destination_routes import destination_routes
from routes.user_routes import user_routes


app.register_blueprint(trip_routes, url_prefix='/api')
app.register_blueprint(review_routes, url_prefix='/api')
app.register_blueprint(destination_routes, url_prefix='/api')
app.register_blueprint(user_routes, url_prefix='/api')



if __name__ == "__main__":
    app.run(debug=True, port=5555)




