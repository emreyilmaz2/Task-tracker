using Microsoft.AspNetCore.Mvc;
using TaskTrackerApi.Models;

namespace TaskTrackerApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController : ControllerBase
    {
        private static readonly List<TaskItem> Tasks = new();

        [HttpGet]
        public ActionResult<IEnumerable<TaskItem>> GetAll() => Ok(Tasks);

        [HttpPost]
        public ActionResult<TaskItem> Create(TaskItem task)
        {
            task.Id = Tasks.Count + 1;
            Tasks.Add(task);
            return CreatedAtAction(nameof(GetById), new { id = task.Id }, task);
        }

        [HttpGet("{id}")]
        public ActionResult<TaskItem> GetById(int id)
        {
            var task = Tasks.FirstOrDefault(t => t.Id == id);
            if (task == null) return NotFound();
            return Ok(task);
        }

        [HttpPut("{id}")]
        public IActionResult Update(int id, TaskItem updated)
        {
            var task = Tasks.FirstOrDefault(t => t.Id == id);
            if (task == null) return NotFound();

            task.Description = updated.Description;
            task.AssignedTo = updated.AssignedTo;
            task.DueDate = updated.DueDate;
            task.IsDone = updated.IsDone;

            return NoContent();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var task = Tasks.FirstOrDefault(t => t.Id == id);
            if (task == null) return NotFound();

            Tasks.Remove(task);
            return NoContent();
        }
    }
}
