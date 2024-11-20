# Helper definitions to handle .aar and .jar targets in Bazel

def create_aar_targets(aarfiles):
    """
    Creates targets for .aar files.

    :param aarfiles: List of paths to .aar files.
    """
    for aarfile in aarfiles:
        # Extract the name of the .aar without path or extension
        name = "aars__" + aarfile[aarfile.rindex("/") + 1:aarfile.rindex(".aar")]
        
        # Add the new target to the library dependencies list
        lib_deps.append(":" + name)
        
        # Create the android_prebuilt_aar target
        android_prebuilt_aar(
            name = name,
            aar = aarfile,
        )

def create_jar_targets(jarfiles):
    """
    Creates targets for .jar files.

    :param jarfiles: List of paths to .jar files.
    """
    for jarfile in jarfiles:
        # Extract the name of the .jar without path or extension
        name = "jars__" + jarfile[jarfile.rindex("/") + 1:jarfile.rindex(".jar")]
        
        # Add the new target to the library dependencies list
        lib_deps.append(":" + name)
        
        # Create the prebuilt_jar target
        prebuilt_jar(
            name = name,
            binary_jar = jarfile,
        )

# Example usage:
# You need to have a list of .aar and .jar files as input to these functions.
aarfiles = ["path/to/lib1.aar", "path/to/lib2.aar"]
jarfiles = ["path/to/lib1.jar", "path/to/lib2.jar"]

lib_deps = []  # Assuming this is your list of library dependencies

# Call the functions to create the targets
create_aar_targets(aarfiles)
create_jar_targets(jarfiles)

print(lib_deps)  # This will show the list of dependencies for your build
