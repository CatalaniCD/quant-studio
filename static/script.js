
	// Toggle  Post
	function togglePost(postId) {
	  const post = document.getElementById(postId);
	  const content = document.getElementById('content' + postId.replace('post', ''));
	  const arrow = document.getElementById('arrow' + postId.replace('post', ''));
	  
	  if (content.classList.contains('hidden')) {
	    // Expand
	    content.classList.remove('hidden');
	    post.classList.add('expanded');
	    arrow.style.transform = 'rotate(180deg)';
	    arrow.textContent = '↑';
	  } else {
	    // Collapse
	    content.classList.add('hidden');
	    post.classList.remove('expanded');
	    arrow.style.transform = 'rotate(0deg)';
	    arrow.textContent = '↓';
	  }
	}

	// Toggle Project
	function toggleProject(projId) {
	  const project = document.getElementById(projId);
	  const content = document.getElementById('content' + projId.replace('proj', ''));
	  const arrow = document.getElementById('arrow' + projId.replace('proj', ''));
	  
	  if (content.classList.contains('hidden')) {
	    // Expand
	    content.classList.remove('hidden');
	    project.classList.add('expanded');
	    arrow.style.transform = 'rotate(180deg)';
	    arrow.textContent = '↑';
	  } else {
	    // Collapse
	    content.classList.add('hidden');
	    project.classList.remove('expanded');
	    arrow.style.transform = 'rotate(0deg)';
	    arrow.textContent = '↓';
	  }
	}
