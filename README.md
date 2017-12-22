# Design Library
A visual interface for finding documents on Dropbox. Created as an internal tool for IDEO.org.

## Dev Requirements
**Project Specifics**  

* Target Release: 1.0  
* Designers: Daniel Feldman, Matthew Epler  
* Developers: Daniel Feldman, Matthew Epler  
* QA: Michael Zhong, Gavin ??  

**Goals and objectives**  

* Create a React-based application for internal use by designers and operations staff. 
* Iterate design and functionality based on feedback from users   
* Use existing stack and explore possible new additions as necessary  i

**Background / Strategy**  

Currently, finding documents is difficult because the file structure is not intuitive and there is no useful search/filter capabilities. This tool will attempt to solve the "Where is that document we made for project X?" problem.

**Assumptions**

Users are IDEO.org employees and are using modern browsers (Chrome, Safari, or Firebox - no older than 2 versions behind current release).  

**Features/Functionality**  

1. Communicate (read-only) with Dropbox to retrieve list of documents  
2. Present the documents in a gallery  
3. Provide search and filter functionality  
4. Provide an interface for adding tags to a document

**User Stories**

| Story | Description | Priority | Notes |  
|:-------------|:-------------|-----|-----|
| User wants to login | Site will be publicly hosted and should require validation via IDEO.org Google Account. | must have | package tbd |
| User wants to search for document by keyord | Search bar used to search file names and tags | must have | can we include content from the document? |
| User wants to filter documents based on tags | List of toggle tags will turn on/off filter keywords. Keywords are used to filter list of results based on tags. | must have | how are we adding tags? |
| User wants to see recently opened documents | User will see documents in the order they were added to Dropbox | nice to have | default if no user-specific recent documents or starred documents exist |
| User wants to see their recently opened documents | list of recently viewed documents to be kept on local storage | nice to have | if none exist, defaults to Dropbox files filtered by creation date | 
| User wants to see "starred" documents | Users can star a document and it will always appear in an easy-to-access list. | nice to have | none shown by default |


**User Interaction and design documents**

![UI mockup](https://www.dropbox.com/s/itb8ub0l2zov7op/design_library_mockup.png?raw=1)

**Stack**  

* React  
* Redux  
* Dropbox API
* others TBD. Ask Matthew what he's been using if you think this hasn't been kept up-to-date.

**Related Resources**  


**Questions**

1. How do we communicate how this is different from the Mothership?


