import os
import shutil

# Define the directory structure
structure = {
    'docs': {
        'introduction': {
            'overview.md': '---\nsidebar_position: 1\n---\n\n# Overview\n\nPlaceholder content for overview',
            'about-sdk.md': '---\nsidebar_position: 2\n---\n\n# About the SDK\n\nPlaceholder content for about SDK'
        },
        'getting-started': {
            'installing-the-sdk.md': '---\nsidebar_position: 1\n---\n\n# Installing the SDK\n\nPlaceholder content for installation',
            'loading-and-rendering-glb.md': '---\nsidebar_position: 2\n---\n\n# Loading and Rendering GLB Models\n\nPlaceholder content for GLB loading',
            'load-multiple-models.md': '---\nsidebar_position: 3\n---\n\n# Loading Multiple Models\n\nPlaceholder content for multiple models',
            'load-multiple-volumes.md': '---\nsidebar_position: 4\n---\n\n# Loading Multiple Volumes\n\nPlaceholder content for multiple volumes'
        },
        'working-with-models': {
            'instancing.md': '---\nsidebar_position: 1\n---\n\n# Model Instancing\n\nPlaceholder content for instancing',
            'modify-subnodes.md': '---\nsidebar_position: 2\n---\n\n# Modifying Subnodes\n\nPlaceholder content for subnodes',
            'visual-tree.md': '---\nsidebar_position: 3\n---\n\n# Visual Tree\n\nPlaceholder content for visual tree'
        },
        'volume-behavior': {
            'display-name.md': '---\nsidebar_position: 1\n---\n\n# Display Name\n\nPlaceholder content for display name',
            'rotation-lock.md': '---\nsidebar_position: 2\n---\n\n# Rotation Lock\n\nPlaceholder content for rotation lock',
            'volume-restore.md': '---\nsidebar_position: 3\n---\n\n# Volume Restore\n\nPlaceholder content for volume restore'
        },
        'tutorials': {
            'scene-from-scratch.md': '---\nsidebar_position: 1\n---\n\n# Creating a Scene from Scratch\n\nPlaceholder content for scene creation',
            'combining-models-volumes.md': '---\nsidebar_position: 2\n---\n\n# Combining Models and Volumes\n\nPlaceholder content for model/volume combination',
            'advanced-composition.md': '---\nsidebar_position: 3\n---\n\n# Advanced Composition\n\nPlaceholder content for advanced composition'
        },
        'api-reference': {
            'python': {
                'overview.md': '---\nsidebar_position: 1\n---\n\n# Python API Overview\n\nPlaceholder content for Python API',
                'instancing.md': '---\nsidebar_position: 2\n---\n\n# Python Instancing API\n\nPlaceholder content for Python instancing',
                'modify-subnodes.md': '---\nsidebar_position: 3\n---\n\n# Python Subnode API\n\nPlaceholder content for Python subnodes'
            },
            'cpp': {
                'overview.md': '---\nsidebar_position: 1\n---\n\n# C++ API Overview\n\nPlaceholder content for C++ API',
                'instancing.md': '---\nsidebar_position: 2\n---\n\n# C++ Instancing API\n\nPlaceholder content for C++ instancing',
                'modify-subnodes.md': '---\nsidebar_position: 3\n---\n\n# C++ Subnode API\n\nPlaceholder content for C++ subnodes'
            },
            'csharp': {
                'overview.md': '---\nsidebar_position: 1\n---\n\n# C# API Overview\n\nPlaceholder content for C# API',
                'instancing.md': '---\nsidebar_position: 2\n---\n\n# C# Instancing API\n\nPlaceholder content for C# instancing',
                'modify-subnodes.md': '---\nsidebar_position: 3\n---\n\n# C# Subnode API\n\nPlaceholder content for C# subnodes'
            }
        },
        'resources': {
            'sample-apps.md': '---\nsidebar_position: 1\n---\n\n# Sample Applications\n\nPlaceholder content for sample apps',
            'faqs.md': '---\nsidebar_position: 2\n---\n\n# Frequently Asked Questions\n\nPlaceholder content for FAQs',
            'glossary.md': '---\nsidebar_position: 3\n---\n\n# Glossary\n\nPlaceholder content for glossary'
        }
    }
}

def create_directory_structure(base_path, structure):
    for name, content in structure.items():
        path = os.path.join(base_path, name)
        if isinstance(content, dict):
            os.makedirs(path, exist_ok=True)
            create_directory_structure(path, content)
        else:
            with open(path, 'w', encoding='utf-8') as f:
                f.write(content)

def main():
    # Remove existing docs directory if it exists
    if os.path.exists('docs'):
        shutil.rmtree('docs')
    
    # Create new directory structure
    create_directory_structure('.', structure)
    print("Documentation structure created successfully!")

if __name__ == '__main__':
    main() 