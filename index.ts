// import {RecipeBuilder, paths, addImport} from "@blitzjs/installer"
import {RecipeBuilder} from "@blitzjs/installer"
// import j from "jscodeshift"
import path from "path"
// import {NodePath} from "ast-types/lib/node-path"
// import {Collection} from "jscodeshift/src/Collection"

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
  .addNewFilesStep({
    stepId: "firebase-utils-integrations",
    stepName: "Create firebase-utils / firebase-admin-utlis",
    explanation: "Add firebase/firebase-admin utils",
    targetDirectory: "./integrations/firebase",
    templatePath: path.join(__dirname, "templates", "integrations", "firebase"),
    templateValues: {},
  })
  .addNewFilesStep({
    stepId: "firebase-config",
    stepName: "Create firebase-config / firebase-admin-cert",
    explanation: `Put config but it's not valid yet.
Get your firebase config from https://console.firebase.google.com/u/0/?hl=JA&pli=1
Get your admin cert from https://firebase.google.com/docs/admin/setup
`,
    targetDirectory: "./config",
    templatePath: path.join(__dirname, "templates", "config"),
    templateValues: {},
  })
  // .addTransformFilesStep({
  //   stepId: "firebase initialize",
  //   stepName: "Import firebase",
  //   explanation: `Import firebase on _app`,
  //   singleFileSearch: paths.app(),
  //   transform(program: Collection<j.Program>) {
  //     paths
  //     addImport(program, j.importDeclaration([], j.literal("firebase/auth")))

  //     const importFirebase = j.importDeclaration(
  //       [j.importDefaultSpecifier(j.identifier("firebase"))],
  //       j.literal("firebase"),
  //     )
  //     addImport(program, importFirebase)
  //     return program
  //   },
  // })
  .build()
