import pymongo

def popularProducts():
    client = pymongo.MongoClient()
    cursor = client.voordeelshop.products.find().limit(6)

    return list(cursor)