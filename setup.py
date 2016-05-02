# -*- coding: utf-8 -*-

import io
from setuptools import setup, find_packages

name = 'morepath_cerebral_todomvc'
description = (
    'Morepath example of using React & Cerebral'
)
long_description = (
    io.open('README.rst', encoding='utf-8').read() + '\n\n' +
    io.open('CHANGES.rst', encoding='utf-8').read())
version = '0.1'

setup(
    name=name,
    version=version,
    description=description,
    long_description=long_description,
    author='Henri Hulski',
    author_email='henri.hulski@gazeta.pl',
    license='MIT',
    url="https://github.com/morepath/morepath_cerebral_todomvc",
    packages=find_packages(),
    include_package_data=True,
    zip_safe=False,
    platforms='any',
    install_requires=[
        'morepath>=0.14',
    ],
    extras_require=dict(
        test=[
            'pytest',
            'webtest',
        ],
    ),
    entry_points=dict(
        morepath=[
            'scan = server',
        ],
        console_scripts=[
            'run-app = server.run:run',
        ],
    ),
    classifiers=[
        'Intended Audience :: Developers',
        'Environment :: Web Environment',
        'Topic :: Internet :: WWW/HTTP :: WSGI',
        'Programming Language :: Python :: 2.7',
        'Programming Language :: Python :: 3.4',
    ]
)
