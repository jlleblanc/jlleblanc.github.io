module: intake
stream: submission

facts:
  - intake.submitted:
      version: 1
      contract:
        name: "string!"
        email: "email!"
        problem: "text!"
        help_options: "string[]?"
      doc: "A potential client submitted the contact form."

projections:
  - intake_submissions:
      pk: id
      doc: "Storage for contact form submissions."
      columns:
        - name: "text"
        - email: "text"
        - problem: "text"
        - help_options: "text[]"
      on:
        intake.submitted:
          - set: id = $stream_id
          - set: name = payload.name
          - set: email = payload.email
          - set: problem = payload.problem
          - set: help_options = payload.help_options

commands:
  - submit_intake:
      params:
        - name: "string!"
        - email: "email!"
        - problem: "text!"
        - help_options: "string[]?"
      emit: intake.submitted
