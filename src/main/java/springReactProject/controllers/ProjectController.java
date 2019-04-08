package springReactProject.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.*;
import springReactProject.errors.BadRequestError;
import springReactProject.models.Project;
import springReactProject.errors.NotFoundError;
import springReactProject.responses.DeleteEntityResponse;
import springReactProject.services.ErrorParserService;
import springReactProject.services.ProjectService;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @Autowired
    private ProjectService projectService;
    @Autowired
    private ErrorParserService errorParserService;

    @PostMapping("")
    public ResponseEntity<?> createProject(@Valid @RequestBody Project project, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            Map<String, String> errorMap = errorParserService.parse(bindingResult);
            return new ResponseEntity<BadRequestError>(new BadRequestError("Invalid object", errorMap), HttpStatus.BAD_REQUEST);
        }

        Project result = projectService.saveOrUpdateProject(project);
        return new ResponseEntity<Project>(result, HttpStatus.CREATED);
    }

    @GetMapping("/{projectIdentifier}")
    public ResponseEntity<?> getProject(@PathVariable String projectIdentifier) {
        Project project = projectService.findProjectByIdentifier(projectIdentifier);
        if (project == null) {
            return new ResponseEntity<NotFoundError>(new NotFoundError("No result found", new HashMap<>()), HttpStatus.NOT_FOUND);
        }
        return new ResponseEntity<Project>(project, HttpStatus.OK);
    }

    @GetMapping("")
    public Iterable<Project> getAllProjects() {
        return projectService.getAllProjects();
    }

    @DeleteMapping("/{projectIdentifier}")
    public ResponseEntity<?> deleteProject(@PathVariable String projectIdentifier) {
        projectService.deleteProjectByIdentifier(projectIdentifier);

        return new ResponseEntity<DeleteEntityResponse>(new DeleteEntityResponse(), HttpStatus.NO_CONTENT);
    }
}
