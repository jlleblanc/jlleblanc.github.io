import os


def is_ignored_file(file_path, ignore_files):
    for ignore_pattern in ignore_files:
        if ignore_pattern in file_path:
            return True
    return False


def create_file_structure(base_path="."):
    file_structure = {}
    ignore_files = [
        "node_modules",
        "out",
        ".git",
        ".vscode",
        ".github",
        ".husky",
        ".vercel",
        ".next",
        ".tmp",
        "package-lock.json",
    ]

    for root, dirs, files in os.walk(base_path):
        # Skip ignored directories
        if any(ignore in root for ignore in ignore_files):
            continue

        relative_path = os.path.relpath(root, base_path)

        for dir_name in dirs:
            file_structure[os.path.join(relative_path, dir_name)] = {}

        for file_name in files:
            file_path = os.path.join(root, file_name)
            relative_file_path = os.path.join(relative_path, file_name)

            # Include only .ts and .tsx files, and skip ignored files
            if (
                file_name.endswith(".ts")
                or file_name.endswith(".tsx")
                or file_name.endswith(".sql")
                or file_name.endswith(".toml")
                or file_name.endswith(".json")
                or file_name.endswith(".md")
                or file_name.endswith(".js")
                or file_name.endswith(".css")
                or file_name.endswith(".xml")
                or file_name.endswith(".txt")
                or file_name.endswith(".mjs")
            ) and not is_ignored_file(relative_file_path, ignore_files):
                try:
                    with open(file_path, "r", encoding="utf-8") as file:
                        file_structure[relative_file_path] = file.read()
                except UnicodeDecodeError:
                    try:
                        with open(file_path, "r", encoding="latin-1") as file:
                            file_structure[relative_file_path] = file.read()
                    except UnicodeDecodeError:
                        print(f"Skipping file: {file_path} (unsupported encoding)")
                        continue

    return file_structure


def generate_documents(file_structure):
    documents = ""
    for path, content in file_structure.items():
        if isinstance(content, dict):
            for sub_path, sub_content in content.items():
                documents += f"""
<documents>
  <document index="{len(documents.split('<document'))}">
    <source>{os.path.join(path, sub_path)}</source>
    <document_content>
{sub_content}
    </document_content>
  </document>
</documents>
"""
        else:
            documents += f"""
<documents>
  <document index="{len(documents.split('<document'))}">
    <source>{path}</source>
    <document_content>
{content}
    </document_content>
  </document>
</documents>
"""
    return documents


def main():
    file_structure = create_file_structure()
    documents = generate_documents(file_structure)
    print(documents)


if __name__ == "__main__":
    main()
