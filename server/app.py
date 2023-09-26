
from server.config import app, db
from server.models import User, Trip, Review, Destination
from server.routes.user_routes import user_routes

app.register_blueprint(user_routes, url_prefix='/api')

if __name__ == "__main__":
    app.run(debug=True, port=5555)



app = Flask(__name__)


app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///travelogue.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)


from app.models import User, Trip, Review, Destination
from app.routes import user_routes
app.register_blueprint(user_routes.user_routes, url_prefix='/api')

