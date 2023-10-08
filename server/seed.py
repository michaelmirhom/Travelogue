from config import app, db
from models import User, Trip, Destination, Review
from werkzeug.security import generate_password_hash

def seed_data():
    
    db.drop_all()
    db.create_all()

    
    user1 = User(username='johnDoe', email='john@example.com', password_hash=generate_password_hash('password123'))
    user2 = User(username='janeDoe', email='jane@example.com', password_hash=generate_password_hash('password456'))

    
    dest1 = Destination(name='Giza', country='Egypt', attractions='Pyramids, River Nile', image_url='https://i.pinimg.com/736x/91/1d/16/911d167e6ceef11ccaad893686b42b18--visit-egypt-ancient-architecture.jpg')
    dest2 = Destination(name='New York', country=' United States', attractions='Statue of Liberty',image_url='https://www.americamagazine.org/sites/default/files/main_image/iStock-476825760.jpg')

    
    trip1 = Trip(destination='Giza', user_id=1)
    trip2 = Trip(destination='New York', user_id=2)

    
    review1 = Review(content='Loved Giza!', rating=5, user_id=1, trip_id=1, destination_id=1)
    review2 = Review(content='New York was bustling and vibrant!', rating=4, user_id=2, trip_id=2, destination_id=2)

    
    db.session.add(user1)
    db.session.add(user2)
    db.session.add(dest1)
    db.session.add(dest2)
    db.session.add(trip1)
    db.session.add(trip2)
    db.session.add(review1)
    db.session.add(review2)


    db.session.commit()

if __name__ == '__main__':
    with app.app_context():
        seed_data()
