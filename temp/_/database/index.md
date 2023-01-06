# 라라벨 : 데이터베이스

## Getting Started
- [Introduction](./start/index)
    - Configuration
    - Read & Write Connections
    - Using Multiple Database Connections
- [Running Raw SQL Queries](./start/queries)
    - Listening For Query Events
- [Database Transactions](./start/transactions)

## [Query Builder](./querybuilder)
* Introduction
* Retrieving Results
    - Chunking Results
    - Aggregates
* Selects
* Raw Expressions
* Joins
* Unions
* Where Clauses
    - Parameter Grouping
    - Where Exists Clauses
    - JSON Where Clauses
* Ordering, Grouping, Limit, & Offset
* Conditional Clauses
* Inserts
* Updates
    - Updating JSON Columns
    - Increment & Decrement
* Deletes
* Pessimistic Locking

## Pagination
* Introduction
* Basic Usage
    - Paginating Query Builder Results
    - Paginating Eloquent Results
    - Manually Creating A Paginator
* Displaying Pagination Results
    - Converting Results To JSON
* Customizing The Pagination View
* Paginator Instance Methods

## Migrations
* Introduction
* Generating Migrations
* Migration Structure
* Running Migrations
    - Rolling Back Migrations
* Tables
    - Creating Tables
    - Renaming / Dropping Tables
* Columns
    - Creating Columns
    - Column Modifiers
    - Modifying Columns
    - Dropping Columns
* Indexes
    - Creating Indexes
    - Renaming Indexes
    - Dropping Indexes
    - Foreign Key Constraints

## Seeding
* Introduction
* Writing Seeders
    - Using Model Factories
    - Calling Additional Seeders
* Running Seeders

## Redis
* Introduction
* Configuration
* Predis
* PhpRedis
    - Interacting With Redis
* Pipelining Commands
    - Pub / Sub