namespace TaskTrackerApi.Models
{
    public class TaskItem
    {
        public int Id { get; set; }
        public string? Description { get; set; }
        public string? AssignedTo { get; set; }
        public DateTime DueDate { get; set; }
        public bool IsDone { get; set; }
    }
}
