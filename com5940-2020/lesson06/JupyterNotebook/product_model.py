from flask import Flask
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql://root:root@localhost/southwind'
app.config['SECRET_KEY'] = "mysecret"
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
db = SQLAlchemy(app)

class Products(db.Model):
    __tablename__ = 'products'
    productID = db.Column(db.Integer, primary_key=True)
    productCode = db.Column(db.String(3))
    name = db.Column(db.String(30))
    quantity = db.Column(db.Integer)
    price = db.Column(db.Float)
    supplierID = db.Column(db.Integer)
    # description = db.Column(db.Text)