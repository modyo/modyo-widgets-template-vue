# Conventional Commits

## Summary

The Conventional Commits specification is a lightweight convention on top of commit messages. It provides an easy set of rules for creating an explicit commit history; which makes it easier to write automated tools on top of. This convention dovetails with SemVer, by describing the features, fixes, and breaking changes made in commit messages.

The commit message should be structured as follows:

```plain
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

The commit contains the following structural elements, to communicate intent to the consumers of your library:

* fix: a commit of the type fix patches a bug in your codebase (this correlates with PATCH in Semantic Versioning).
* feat: a commit of the type feat introduces a new feature to the codebase (this correlates with MINOR in Semantic Versioning).
BREAKING CHANGE: a commit that has a footer BREAKING CHANGE:, or appends a ! after the type/scope, introduces a breaking API change (correlating with MAJOR in Semantic Versioning). A BREAKING CHANGE can be part of commits of any type.

Types other than fix: and feat: are allowed, for example

* chore
* ci
* docs
* style
* refactor
* test

Footers other than BREAKING CHANGE: <description> may be provided and follow a convention similar to git trailer format.

### Examples

Commit message with description and breaking change footer

```plain
feat: allow provided config object to extend other configs

BREAKING CHANGE: `extends` key in config file is now used for extending other config files
```

Commit message with ! to draw attention to breaking change

```plain
refactor!: drop support for Node 6
```

Commit message with both ! and BREAKING CHANGE footer

```plain
refactor!: drop support for Node 6

BREAKING CHANGE: refactor to use JavaScript features not available in Node 6.
```

Commit message with no body

```plain
docs: correct spelling of CHANGELOG
```

Commit message with scope

```plain
feat(lang): add polish language
```

Commit message with multi-paragraph body and multiple footers

```plain
fix: correct minor typos in code

see the issue for details

on typos fixed.
```

## Why Use Conventional Commits

* Automatically generating CHANGELOGs.
* Automatically determining a semantic version bump (based on the types of commits landed).
* Communicating the nature of changes to teammates, the public, and other stakeholders.
* Triggering build and publish processes.
* Making it easier for people to contribute to your projects, by allowing them to explore a more structured commit history.
