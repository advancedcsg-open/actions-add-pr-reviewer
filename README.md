# Action - Add PR Reviewer(s)

GitHub Action to add reviewer(s) to a pull request. 
 
## Usage
```
- name: Add Pull Request Reviewer
      uses: AveryCameronUofR/add-reviewer-gh-action@1.0.3
      with: 
        reviewers: "hobbit_71"
 ```
 
### Inputs

| Name | Description | Default |
| --- | --- | --- |
| `reviewers` | The email or user name of the reviewer(s) to add. If more than one use a comma separated list. | none |
| `remove` | Remove a review request (boolean) | `false` |

### Outputs
None
