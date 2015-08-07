# Notebook Specification

Notebooks are persisted in YAML or JSON format. Notebooks have some top-level
properties, and a sequence of cells. Cells are either markdown cells or code
cells. Cells contain input text, and a number of outputs, as well as comments.

## Top-level Notebook Structure

    {
      version: "1.0",
      title: "User-specified-title",
      id: "UUID to uniquely identify the notebook",
      metadata: {
        key/value pairs
      },
      cells: [
        ...
      ]
    }

## Cell Structure

    {
      type: "code|markdown|raw",
      metadata: {
        key/value pairs
        mime,
        counter,
        timestamp
      },
      input: "input text",
      outputs: [
        ...
      ],
      comments: [
        ...
      ]
    }

## Outputs

    {
      type: "stdout|stderr|value",
      metadata: {
        key/value pairs
        mime
      },
      data: "output data"
    }

## Comments

    {
      posts: [
        ...
      ],
      resolved: true|false
    }

    {
       timestamp: "date",
       author: "name",
       text: "text"
    }

