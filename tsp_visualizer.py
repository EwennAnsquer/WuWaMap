import math
import random
import tkinter as tk

def distance(point1, point2):
    return math.sqrt((point1[0] - point2[0])**2 + (point1[1] - point2[1])**2)

def nearest_neighbor_path(cities, start, unvisited):
    path = [start]
    current = start
    total_distance = 0

    while unvisited:
        # Find the nearest unvisited city to the current city
        next_city = min(unvisited, key=lambda x: distance(cities[current], cities[x]))
        
        # Check if the next city is closer to the starting city (city 0) than to the current city
        if distance(cities[current], cities[next_city]) > distance(cities[0], cities[next_city]):
            break  # End this path and start a new one if the next city is closer to city 0
        
        # Remove the next city from the unvisited set
        unvisited.remove(next_city)
        
        # Add the next city to the path
        path.append(next_city)
        
        # Update the total distance of the path
        total_distance += distance(cities[current], cities[next_city])
        
        # Move to the next city
        current = next_city

    return path, total_distance

def create_optimized_paths(cities):
    unvisited = set(range(1, len(cities)))  # All cities except 0
    paths = []

    while unvisited:
        path, distance = nearest_neighbor_path(cities, 0, unvisited)
        paths.append((path, distance))
        unvisited -= set(path[1:])  # Remove visited cities, keeping 0 unvisited

    return paths

def draw_paths(canvas, cities, paths):
    colors = ['red', 'green', 'blue', 'orange', 'purple', 'brown', 'pink', 'gray', 'olive', 'cyan']
    
    # Draw cities
    for i, (x, y) in enumerate(cities):
        canvas.create_oval(x-5, y-5, x+5, y+5, fill='black')
        canvas.create_text(x, y-10, text=str(i))

    # Draw paths
    for i, (path, _) in enumerate(paths):
        color = colors[i % len(colors)]
        for j in range(len(path) - 1):
            x1, y1 = cities[path[j]]
            x2, y2 = cities[path[j+1]]
            canvas.create_line(x1, y1, x2, y2, fill=color, arrow=tk.LAST, width=2)

        # Highlight start and end points
        start_x, start_y = cities[path[0]]
        end_x, end_y = cities[path[-1]]
        canvas.create_oval(start_x-8, start_y-8, start_x+8, start_y+8, outline=color, width=2)
        canvas.create_text(start_x, start_y+20, text="Start", fill=color)
        canvas.create_oval(end_x-8, end_y-8, end_x+8, end_y+8, outline=color, width=2)
        canvas.create_text(end_x, end_y+20, text="End", fill=color)

def main():
    # Generate a random number of cities between 10 and 30
    num_cities = random.randint(2, 4)
    cities = [(random.randint(50, 750), random.randint(50, 750)) for _ in range(num_cities)]
    cities[0] = (400, 400)  # Set the first city (index 0) to the center

    paths = create_optimized_paths(cities)

    root = tk.Tk()
    root.title("Optimized Paths Visualization")

    canvas_width = 800
    canvas_height = 800
    canvas = tk.Canvas(root, width=canvas_width, height=canvas_height, bg='white')
    canvas.pack()

    draw_paths(canvas, cities, paths)

    # Add labels with path information
    for i, (path, distance) in enumerate(paths):
        label = tk.Label(root, text=f"Path {i+1} (0 to {path[-1]}): Distance = {distance:.2f}")
        label.pack()

    print(f"Created {len(paths)} optimized paths")
    root.mainloop()

if __name__ == "__main__":
    main()
