
import sys
import subprocess

def install(package):
    subprocess.check_call([sys.executable, "-m", "pip", "install", package])

try:
    from PIL import Image
except ImportError:
    print("Pillow not found, installing...")
    try:
        install("Pillow")
        from PIL import Image
    except Exception as e:
        print(f"Failed to install Pillow: {e}")
        sys.exit(1)

def convert_to_transparent(path):
    print(f"Processing {path}...")
    try:
        img = Image.open(path).convert("RGBA")
        datas = img.getdata()
        
        newData = []
        for item in datas:
            # Simple threshold or just strict black?
            # Since it's generated, it might have compression artifacts.
            # Let's use the 'Luminance as Alpha' trick for a white logo.
            # Assuming the user wants a WHITE logo.
            
            # Calculate brightness
            brightness = (item[0] + item[1] + item[2]) / 3
            
            # If we want pure white logo with transparency based on brightness:
            # R=255, G=255, B=255, A=brightness
            
            # However, if there are gray gradients in the design, this preserves them as semi-transparent white.
            # If the background is not perfectly black (e.g. jpeg artifact), this helps too.
            
            # Use non-linear alpha to make it punchier if needed, but linear is safest.
            newData.append((255, 255, 255, int(brightness)))

        img.putdata(newData)
        img.save(path, "PNG")
        print("Successfully converted to transparent white logo.")
    except Exception as e:
        print(f"Error processing image: {e}")

if __name__ == "__main__":
    convert_to_transparent("public/logo.png")
    convert_to_transparent("public/favicon.png")
