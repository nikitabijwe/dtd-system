from fastapi import APIRouter
from app.models.models import Point, Parameters
from app.services.simulate import simulate_dynamical_system

simulate_router = APIRouter()

@simulate_router.get("/")
async def root():
    return {"message": "Hello World"}

@simulate_router.post("/simulate/")
async def run_simulation(initial_conditions: Point, parameters: Parameters):
    positions = simulate_dynamical_system(
        initial_conditions.x,
        initial_conditions.y,
        initial_conditions.z,
        parameters.sigma,
        parameters.rho,
        parameters.beta,
        parameters.delta_t,
        parameters.N
    )
    return {"positions": positions}
