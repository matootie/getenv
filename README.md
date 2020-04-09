# Get Environment

Action that will determine the correct environment based on a provided Git ref.

**This is only intended for personal use, and is not very customizable at the moment.**

Example:

* `refs/heads/foobar` -> development-foobar
* `refs/heads/feature/foobar` -> development-feature-foobar
* `refs/heads/master` -> staging
* `refs/heads/staging` -> staging
* `refs/tags/v1.23.4-alpha.5` -> alpha
* `refs/tags/v1.23.4-beta.5` -> beta
* `refs/tags/v1.23.4` -> production

The resulting environment string is outputted to `env`. You can access it using `steps.<step id>.outputs.env`. More information can be found [here](https://help.github.com/en/actions/reference/context-and-expression-syntax-for-github-actions#steps-context).

*I made this because I needed an easy way for my CI/CD workflow to determine the correct environment, so that my development GitHub deployment would not overlap my staging GitHub deployment.*
