# API expecations

## Input

**GET /ethograms**

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

**POST /observation_sessions**

{
  "observation_session": {
    "observations": [
      {
        "id": "uuid-goes-here",
        "timestamp": "2017-05-19T01:15:09.728Z",
        "subject": "Minerva",
        "behavior": "walking",
        "modifier": "quickly"
      },
      {
        "id": "other-uuid-goes-here",
        "timestamp": "2017-05-19T01:15:09.728Z",
        "subject": "Minerva",
        "behavior": "fighting",
        "target": "Lulu"
      }
    ]
  }
}