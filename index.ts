import {RecipeBuilder, paths, addImport} from "@blitzjs/installer"
// import j from "jscodeshift"
// import {NodePath} from "ast-types/lib/node-path"
// import {Collection} from "jscodeshift/src/Collection"

export default RecipeBuilder()
  .setName("firebase-auth")
  .setDescription(`Configure your Blitz app's firebase auth`)
  .setOwner("miz404@gmail.com")
  .setRepoLink("https://github.com/blitz-js/blitz")
  // .addAddDependenciesStep({
  //   stepId: "addDeps",
  //   stepName: "Add npm dependencies",
  //   explanation: `Chakra requires some other dependencies like emotion to work`,
  //   packages: [
  //     {name: "@chakra-ui/core", version: "latest"},
  //     {name: "@emotion/core", version: "latest"},
  //     {name: "@emotion/styled", version: "latest"},
  //     {name: "emotion-theming", version: "latest"},
  //   ],
  // })
  // .addTransformFilesStep({
  //   stepId: "importProviderAndReset",
  //   stepName: "Import ThemeProvider and CSSReset component",
  //   explanation: `We can import the chakra provider into _app, so it is accessibly in the whole app`,
  //   singleFileSearch: paths.app(),
  //   transform(program: Collection<j.Program>) {
  //     const stylesImport = j.importDeclaration(
  //       [
  //         j.importSpecifier(j.identifier("CSSReset")),
  //         j.importSpecifier(j.identifier("ThemeProvider")),
  //       ],
  //       j.literal("@chakra-ui/core"),
  //     )

  //     addImport(program, stylesImport)
  //     return wrapComponentWithThemeProvider(program)
  //   },
  // })
  .build()
