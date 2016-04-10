from setuptools import setup, find_packages

setup(
    name='morepath_cerebral_todomvc',
    version='0.1.0',
    description="Morepath example of using React & Cerebral",
    author="Henri Hulski",
    author_email="henri.hulski@gazeta.pl",
    license="MIT",
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    install_requires=[
        'setuptools',
        'morepath',
        'webtest',
        'pytest'
    ],
    entry_points={
        'console_scripts': [
            'start = morepath_cerebral_todomvc.main:main',
        ]
    },
)
