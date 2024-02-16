import unittest
from pydantic import ValidationError
from app.models.models import Point, Parameters

class TestPointModel(unittest.TestCase):
    def test_valid_point(self):
        data = {"x": 0.1, "y": 0.2, "z": 0.3}
        point = Point(**data)
        self.assertEqual(point.x, 0.1)
        self.assertEqual(point.y, 0.2)
        self.assertEqual(point.z, 0.3)

    def test_invalid_point(self):
        with self.assertRaises(ValidationError):
            data = {"x": "invalid", "y": 0.2, "z": 0.3}
            Point(**data)

class TestParametersModel(unittest.TestCase):
    def test_valid_parameters(self):
        data = {"sigma": 0.1, "rho": 0.2, "beta": 0.3, "delta_t": 0.01, "N": 10}
        parameters = Parameters(**data)
        self.assertEqual(parameters.sigma, 0.1)
        self.assertEqual(parameters.rho, 0.2)
        self.assertEqual(parameters.beta, 0.3)
        self.assertEqual(parameters.delta_t, 0.01)
        self.assertEqual(parameters.N, 10)

    def test_invalid_parameters(self):
        with self.assertRaises(ValidationError):
            data = {"sigma": 0.1, "rho": "invalid", "beta": 0.3, "delta_t": 0.01, "N": 10}
            Parameters(**data)

if __name__ == "__main__":
    unittest.main()
