const core = require('@actions/core')
const github = require('@actions/github')

function main () {
  try {
    const reviewers = core.getInput('reviewers')
    const removeRequest = core.getInput('remove').toLowerCase() === 'true'
    const prReviewers = reviewers.split(', ')
    const token = process.env.GITHUB_TOKEN
    const octokit = new github.getOctokit(token)
    const context = github.context

    if (context.payload.pull_request == null) {
      core.setFailed('No current pull request identified.')
      return
    }

    const pullRequestNumber = context.payload.pull_request.number
    const params = {
      ...context.repo,
      pull_number: pullRequestNumber,
      reviewers: prReviewers
    }

    if (removeRequest) {
      octokit.pulls.removeRequestedReviewers(params)
    } else {
      octokit.pulls.requestReviewers(params)
    }
  } catch (error) {
    core.setFailed(error.message)
  }
}

main()
