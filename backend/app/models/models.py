from pydantic import BaseModel

class Point(BaseModel):
    x: float
    y: float
    z: float

class Parameters(BaseModel):
    sigma: float
    rho: float
    beta: float
    delta_t: float
    N: int
