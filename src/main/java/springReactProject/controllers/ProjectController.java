package springReactProject.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import springReactProject.models.errors.BadRequestError;
import springReactProject.models.Project;
import springReactProject.services.ProjectService;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {

    @Autowired
    private ProjectService projectService;

    @PostMapping("")
    public ResponseEntity<?> createProject(@Valid @RequestBody Project project, BindingResult bindingResult) {

        if (bindingResult.hasErrors()) {
            return new ResponseEntity<BadRequestError>(new BadRequestError("Invalid object"), HttpStatus.BAD_REQUEST);
        }
        Project result = projectService.saveOrUpdateProject(project);
        return new ResponseEntity<Project>(result, HttpStatus.CREATED);
    }
}
