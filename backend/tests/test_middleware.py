import unittest
from unittest.mock import MagicMock
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.middleware.cors import add_cors_middleware

class TestAddCorsMiddleware(unittest.TestCase):
    def test_add_cors_middleware(self):
        # Create a mock FastAPI app
        app = MagicMock(spec=FastAPI)

        # Call the add_cors_middleware function
        add_cors_middleware(app)

        # Check if the CORSMiddleware is added to the app
        app.add_middleware.assert_called_once_with(
            CORSMiddleware,
            allow_origins=[
                "http://localhost",
                "http://localhost:3001",
            ],
            allow_credentials=True,
            allow_methods=["GET", "POST", "PUT", "DELETE"],
            allow_headers=["*"],
        )

if __name__ == "__main__":
    unittest.main()
