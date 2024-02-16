from typing import List, Tuple
import math

def simulate_dynamical_system(x0: float, y0: float, z0: float, sigma: float, rho: float, beta: float, delta_t: float, N: int) -> List[Tuple[int, float, float, float]]:
 
    positions = []
    x, y, z = x0, y0, z0
    
    for counter in range(N + 1):
        positions.append((counter, x, y, z))
        
        x_next = x + z * sigma * (y - x) * delta_t
        y_next = y + (x * (rho - z) - z * y) * delta_t
        z_next = z + (x * y - beta * z) * delta_t

        # Check for NaN and infinity
        if math.isnan(x_next) or math.isinf(x_next):
        # Handle NaN and infinity by setting values to 0
            x_next = 0
        if math.isnan(y_next) or math.isinf(y_next):
            y_next = 0
        if math.isnan(z_next) or math.isinf(z_next):
            z_next = 0
        
        x, y, z = x_next, y_next, z_next

    return positions
