# API expecations

## Input

**GET /api/ethograms**

{
  "data": [
    {
      "id": 123, // should this be a uuid?
      "name": "Cat Observations 2017",
      "subjects": ["Miles", "Lulu", "Momo", "Minerva"],
      "behaviors": [
        {"name": "walking", "modifiers": ["quickly", "slowly"], "hasTarget": false},
        {"name": "fighting", "modifiers": [], "hasTarget": true}
      ]
    }
  ]
}

## Output

**POST /api/observation_sessions**

Request
```json
{
  "sent_at": "2017-05-19T01:15:09.728Z",
  "observations": [
    {
      "id": "3b37486d-3a96-414a-a000-b644ce649b53",
      "observation_session_id": "3b37486d-3a96-414a-a000-b644ce649b52",
      "timestamp": "2017-05-19T01:15:09.728Z",
      "subject": "Minerva",
      "behavior": "walking",
      "modifier": "quickly"
    },
    {
      "id": "3b37486d-3a96-414a-a000-b644ce649b55",
      "observation_session_id": "3b37486d-3a96-414a-a000-b644ce649b55",
      "timestamp": "2017-05-19T01:15:09.728Z",
      "subject": "Minerva",
      "behavior": "fighting",
      "target": "Lulu"
    }
  ]
}
```

Response
```json
[
  {
    "id": "3b37486d-3a96-414a-a000-b644ce649b53",
    "persisted": true,
    "errors": []
  },
  {
    "id": "3b37486d-3a96-414a-a000-b644ce649b55",
    "persisted": true,
    "errors": []
  }
]
```