# customer table 

Given an `app.js` file and an empty database file `customersTables.db`.

Create a table with the name `todo` with the following columns,

**customers tabale **

| Column   | Type            |
| -------- | -------         |
|customerid| INT PRIMARY KEY |
| name     | VARCHAR(50)     |
| email    | VARCHAR(50)     |

and write APIs to perform operations on the table `customerTable.db`,
```
               Create 'customers' table
              CREATE TABLE customers (
                customerid INT PRIMARY KEY,
                name VARCHAR(50),
                email VARCHAR(50)
              );
              
              -- Insert values into 'customers' table
              INSERT INTO customers (customerid, name, email)
              VALUES
                (1, 'Ravi', 'ravi123@gmail.com'),
                (2, 'Kishan', 'kishan11@gmail.com'),
                (3, 'Sameer', 'sameer44@gmail.com');
              
              -- Create 'subjects' table
              CREATE TABLE subjects (
                subjectld INT PRIMARY KEY,
                subjectName VARCHAR(50)
              );
              
              -- Insert values into 'subjects' table
              INSERT INTO subjects (subjectld, subjectName)
              VALUES
                (1, 'English'),
                (2, 'Hindi'),
                (3, 'Maths');
              
              -- Create 'subject_student_mapping' table
              CREATE TABLE subject_student_mapping (
                mappingId INT PRIMARY KEY,
                customerId INT,
                subjectId INT,
                FOREIGN KEY (customerId) REFERENCES customers(customerid),
                FOREIGN KEY (subjectId) REFERENCES subjects(subjectld)
              );
              
              -- Insert values into 'subject_student_mapping' table
              INSERT INTO subject_student_mapping (mappingId, customerId, subjectId)
              VALUES
                (1, 1, 1),
                (2, 1, 2),
                (3, 1, 3),
                (4, 2, 1),
                (5, 3, 3),
                (6, 3, 1);
```

<MultiLineNote>
  
  - Replace the spaces in URL with `%20`.
  - Possible values for `priority` are `HIGH`, `MEDIUM`, and `LOW`.
  - Possible values for `status` are `TO DO`, `IN PROGRESS`, and `DONE`.
</MultiLineNote>

### API 1

#### Path: `/login/`

#### Method: `GET`

- **Scenario 1**

  - **Sample API**
  ```
   POST http://localhost:3000/login
    ```

- **Scenario 2**

  - **Sample API**
    ```
    Get http://localhost:3000/customer
    ```
  - **Description**:

    Returns a list of all customer tabale


- **Scenario 3**

  - **Sample API**
    ```
      Get http://localhost:3000/subjects
    ```
  - **Description**:

    Returns a list


- 
