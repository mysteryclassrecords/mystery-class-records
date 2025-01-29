from PIL import Image
import os
import sys

# Get the folder where the script is located
input_folder = os.path.dirname(os.path.abspath(__file__))
output_folder = os.path.join(input_folder, "converted")

# Create the output folder if it doesn't exist
os.makedirs(output_folder, exist_ok=True)

# Function to repeatedly ask for valid input
def get_valid_input(prompt, valid_options):
    while True:
        user_input = input(prompt).strip().lower()
        if user_input in valid_options:
            return valid_options[user_input]
        print("❌ Invalid input. Please try again.")

# Ask user for input file type
input_type_options = {"j": "jpg", "p": "png", "w": "webp", "q": "quit"}
input_format = get_valid_input("Choose input file format - JPG (j), PNG (p), WebP (w), or Quit (q): ", input_type_options)
if input_format == "quit":
    print("👋 Exiting program.")
    sys.exit(0)

# Ask user for output file type
file_type_options = {"j": "JPEG", "p": "PNG", "w": "WEBP", "q": "quit"}
output_format = get_valid_input("Choose output file format - JPG (j), PNG (p), WebP (w), or Quit (q): ", file_type_options)
if output_format == "quit":
    print("👋 Exiting program.")
    sys.exit(0)

# Ask user for image resizing option
size_options = {"o": "original", "h": "half-size", "t": "two-thirds-size", "c": "custom", "q": "quit"}
size_choice = get_valid_input("Choose image size - Original (o), Half-size (h), Two-thirds-size (t), Custom (c), or Quit (q): ", size_options)
if size_choice == "quit":
    print("👋 Exiting program.")
    sys.exit(0)

# If custom size is chosen, ask for dimensions
if size_choice == "custom":
    while True:
        try:
            new_width = int(input("Enter new width for all images: "))
            new_height = int(input("Enter new height for all images: "))
            break
        except ValueError:
            print("❌ Invalid input. Please enter numeric values.")

# Process each image in the folder
for filename in os.listdir(input_folder):
    if filename.lower().endswith(f".{input_format}"):
        img_path = os.path.join(input_folder, filename)
        img = Image.open(img_path)
        original_width, original_height = img.size

        # Resize logic
        if size_choice == "half-size":
            new_width, new_height = original_width // 2, original_height // 2
        elif size_choice == "two-thirds-size":
            new_width, new_height = int(original_width * 2 / 3), int(original_height * 2 / 3)
        elif size_choice == "original":
            new_width, new_height = original_width, original_height

        # Resize the image using correct resampling method
        img = img.resize((new_width, new_height), Image.Resampling.LANCZOS)

        # Create output file path
        output_filename = os.path.splitext(filename)[0] + f".{output_format.lower()}"
        output_path = os.path.join(output_folder, output_filename)

        # Save with correct format & quality settings
        if output_format == "JPEG":
            img.save(output_path, "JPEG", quality=85, optimize=True)
        elif output_format == "PNG":
            img.save(output_path, "PNG", optimize=True)
        elif output_format == "WEBP":
            img.save(output_path, "WEBP", quality=85, optimize=True)

        print(f"✅ Converted: {filename} → {output_filename} ({new_width}x{new_height})")

print(f"\n🎉 Conversion complete! Check the 'converted' folder.")
input("Press Enter to exit...")
