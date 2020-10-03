import {RecipeBuilder, paths, addImport} from "@blitzjs/installer"
import j from "jscodeshift"
// import {NodePath} from "ast-types/lib/node-path"
import {Collection} from "jscodeshift/src/Collection"

export default RecipeBuilder()
  .setName("firebase-auth")
  .setDescription(`Configure your Blitz app's firebase auth`)
  .setOwner("miz404@gmail.com")
  .setRepoLink("https://github.com/blitz-js/blitz")
  .addAddDependenciesStep({
    stepId: "addDeps",
    stepName: "Add npm dependencies",
    explanation: `Add firebase`,
    packages: [
      {name: "firebase", version: "latest"},
      {name: "firebase-admin", version: "latest"},
      {name: "react-firebase-hooks", version: "latest"},
    ],
  })
  .addTransformFilesStep({
    stepId: "importProviderAndReset",
    stepName: "Import ThemeProvider and CSSReset component",
    explanation: `We can import the chakra provider into _app, so it is accessibly in the whole app`,
    singleFileSearch: paths.app(),
    transform(program: Collection<j.Program>) {
      addImport(program, j.importDeclaration([], j.literal("firebase/auth")))

      const importFirebase = j.importDeclaration(
        [j.importDefaultSpecifier(j.identifier("firebase"))],
        j.literal("firebase"),
      )

      addImport(program, importFirebase)

      program.insertAfter(
        j.callExpression(j.memberExpression(j.identifier("firebase"), j.identifier("config")), [
          j.objectExpression([]),
        ]),
      )
      return program
    },
  })
  .build()
