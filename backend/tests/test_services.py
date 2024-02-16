import unittest
from app.services.simulate import simulate_dynamical_system

class TestSimulateDynamicalSystem(unittest.TestCase):
    
    def test_simulation(self):
        
        # Define parameters for the simulation
        x0, y0, z0 = 0.1, 0.2, 0.3
        sigma, rho, beta, delta_t = 0.1, 0.2, 0.3, 0.01
        N = 10

        # Call the simulate_dynamical_system function
        positions = simulate_dynamical_system(x0, y0, z0, sigma, rho, beta, delta_t, N)

        # Check the length of positions list
        self.assertEqual(len(positions), N + 1)

        # Check if the initial position is correct
        initial_position = positions[0]
        self.assertEqual(initial_position, (0, x0, y0, z0))

        # Check if the subsequent positions are calculated correctly
        for counter, x, y, z in positions[1:]:
            x_expected = x0 + z0 * sigma * (y0 - x0) * delta_t * counter
            y_expected = y0 + (x0 * (rho - z0) - z0 * y0) * delta_t * counter
            z_expected = z0 + (x0 * y0 - beta * z0) * delta_t * counter

            self.assertAlmostEqual(x, x_expected, places=1)
            self.assertAlmostEqual(y, y_expected, places=1)
            self.assertAlmostEqual(z, z_expected, places=1)

if __name__ == '__main__':
    unittest.main()
