from setuptools import setup, find_packages

name = "morepath_cerebral_todomvc"
description = "Morepath example of using React & Cerebral"
long_description = (
    open("README.rst", encoding="utf-8").read()
    + "\n\n"
    + open("CHANGES.rst", encoding="utf-8").read()
)
version = "0.3.dev0"

setup(
    name=name,
    version=version,
    description=description,
    long_description=long_description,
    author="Morepath developers",
    author_email="morepath@googlegroups.com",
    license="BSD",
    url="https://github.com/morepath/morepath_cerebral_todomvc",
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    platforms="any",
    install_requires=[
        "morepath>=0.15",
    ],
    extras_require=dict(
        test=[
            "pytest",
            "pytest-cov",
            "webtest",
        ],
    ),
    entry_points=dict(
        morepath=[
            "scan = server",
        ],
        console_scripts=[
            "run-app = server.run:run",
        ],
    ),
    python_requires=">= 3.6",
    classifiers=[
        "Intended Audience :: Developers",
        "Environment :: Web Environment",
        "License :: OSI Approved :: BSD License",
        "Topic :: Internet :: WWW/HTTP :: WSGI",
        "Programming Language :: Python :: 3.6",
        "Programming Language :: Python :: 3.7",
        "Programming Language :: Python :: 3.8",
        "Programming Language :: Python :: 3.9",
    ],
)
