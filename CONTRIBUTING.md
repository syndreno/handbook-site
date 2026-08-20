# Contributing

Thank you for helping the Developer Master Handbook remain accurate, clear, and useful for future learners.

## Ways to help

- Correct inaccurate or outdated information.
- Add practical examples, exercises, diagrams, or references.
- Improve clarity, accessibility, grammar, and translations.
- Add or improve a handbook in the separate
  [`syndreno/handbooks`](https://github.com/syndreno/handbooks) repository.
- Improve the website, search, navigation, performance, or build tooling.

## Content standards

- Prefer accurate, verifiable information over volume.
- Use primary or authoritative sources for facts that may change.
- Explain unfamiliar terms and write with beginners in mind.
- Do not submit copied, confidential, infringing, promotional, or malicious material.
- Identify and attribute compatible third-party material near where it appears.
- Keep unrelated changes out of the same contribution.

## Add or update a handbook

1. Open the `syndreno/handbooks` repository and edit or create a Markdown file
   anywhere under the appropriate category and subcategory folders. Folder
   nesting may be as deep as the topic requires.
2. Use a clear first H1. Optional frontmatter may provide a title, description,
   tags, and order. An optional folder `INDEX.md` may set the navigation label
   with its first H1; it is not published as a handbook.
3. Keep relative links and image paths valid.
4. Commit the content change there. To test it with this website, push the
   branch or point the local handbook checkout at it, then run the site checks.

```bash
npm install
npm run check
npm run lint:docs
npm run build
```

5. Explain what changed, why it helps learners, and which sources were used.

Website code changes belong in this repository. `npm run build` synchronizes
the configured handbook repository before validating and generating the site.

Substantial reorganizations, new policies, or large learning paths should begin with a repository issue so the community can discuss scope and maintenance.

## Review

Maintainers review contributions for accuracy, clarity, accessibility, licensing, safety, and maintainability. Review may request smaller changes, additional sources, or clearer attribution.

## Contribution licensing

By submitting a contribution, you confirm that you have the right to provide it and agree that:

- Handbook and educational content may be distributed under CC BY-SA 4.0.
- Website software may be distributed under the MIT License.
- You retain copyright in your original contribution.

## Conduct

Participation is governed by [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). Be constructive, patient, and respectful of learners and contributors at every experience level.
