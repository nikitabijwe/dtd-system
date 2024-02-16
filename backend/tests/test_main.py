from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_root_endpoint():
    response = client.get("/")
    assert response.status_code == 200
    assert response.json() == {"message": "Hello World"}


def test_simulate_endpoint():
    initial_conditions = {"x": 0.0, "y": 0.0, "z": 0.0}
    parameters = {"sigma": 10.0, "rho": 28.0, "beta": 8 / 3, "delta_t": 0.01, "N": 1000}
    response = client.post(
        "/simulate/",
        json={"initial_conditions": initial_conditions, "parameters": parameters},
    )
    assert response.status_code == 200
    assert "positions" in response.json()
