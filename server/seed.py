from config import app, db
from models import User, Trip, Destination, Review
from werkzeug.security import generate_password_hash

def seed_data():
    
    db.drop_all()
    db.create_all()

    
    user1 = User(username='johnDoe', email='john@example.com', password_hash=generate_password_hash('password123'))
    user2 = User(username='janeDoe', email='jane@example.com', password_hash=generate_password_hash('password456'))

    
    dest1 = Destination(name='Giza', country='Egypt', attractions='Pyramids, River Nile', image_url='https://i.pinimg.com/originals/9d/bb/e8/9dbbe803857060a7f3d17350302c75a4.jpg')
    dest2 = Destination(name='Tokyo', country='Japan', attractions='Tokyo Tower, Senso-ji Temple',image_url='https://d1bv4heaa2n05k.cloudfront.net/user-images/1471601551497/shutterstock-194861771_main_1471601557463.jpeg')

    
    trip1 = Trip(destination='Giza', user_id=1)
    trip2 = Trip(destination='Tokyo', user_id=2)

    
    review1 = Review(content='Loved Giza!', rating=5, user_id=1, trip_id=1, destination_id=1)
    review2 = Review(content='Tokyo was bustling and vibrant!', rating=4, user_id=2, trip_id=2, destination_id=2)

    
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
