# Refer http://www.claytonlz.com/2008/08/php-deployment-with-capistrano/
# Prior to running this with "cap dev deploy", we've:
#
# 1. installed capistrano:
#    # https://github.com/josh/brew-gem
#    sudo brew install brew-gem
#    sudo brew gem capistrano capistrano-ext
#
# 2. created the capistrano config
#    cd /my-project
#    mkdir config
#    capify .
#
# 3. Uploaded our public key to the remote server
#    # No ssh-copy-id on a Mac, so we need to do this to push our public key to the remote server
#    cat ~/.ssh/id_rsa.pub | ssh readium@readium.newzealandeducated.com "mkdir ~/.ssh; cat >> ~/.ssh/authorized_keys"
#
# 4. Run the setp to initialise the folder structure in the remote server
#    cap dev deploy:setup

# The name of our application
set :application, "app.readium"

# The repo we're cloning our files from
set :scm, :git
set :repository,  "git@github.com:jcdarwin/readium.git"

# There's no git on the production server - do a deploy-via :copy
set :deploy_via, :copy
set :copy_cache, true

# Those files that are under version control, but that we don't want to deploy
set :copy_exclude, [".git", ".gitignore", ".rvmrc", ".DS_Store"]

# The directory on the remote host we're deploying to
set :deploy_to, "/home/readium/#{application}"

# The root location that we want to symlink the latest "current" deployed version of our application to
set :document_root, "/home/readium/public_html"

# ssh settings
set :user, "readium"
set :use_sudo, false
set :ssh_options, {:forward_agent => true}

# our unversioned assets
set :shared_assets, %w{epub_content/lml58_panz_epub}

# if you want to clean up old releases on each deploy uncomment this:
# after "deploy:restart", "deploy:cleanup"

# this is so we automatically deploy the current branch, without tagging
set :branch, "panz"

## multi-stage deploy process ##
task :dev do
  # ssh settings
  set :user, "readium"
  set :use_sudo, false
  set :ssh_options, {:forward_agent => true}

  role :web, "192.168.56.101", :primary => true
  set :app_environment, "dev"
 end

task :prod do
  # ssh settings
  set :user, "readium"
  set :use_sudo, false
  set :ssh_options, {:forward_agent => true}

  role :web, "newzealandeducated.com", :primary => true
  set :app_environment, "prod"
end

# shared content
# http://stackoverflow.com/questions/4648180/keep-unversioned-files-when-deploying-with-capistrano
set :shared_assets, %w{where/ever}

namespace :assets  do

  namespace :symlinks do
    desc "Setup symlinks for shared assets (epub content)"
    task :setup, :roles => [:app, :web] do
      # shared_assets.each { |link| run "mkdir -p #{shared_path}/#{link}" }
    end

    desc "Create links for shared content"
    task :update, :roles => [:app, :web] do
      # shared_assets.each { |link| run "ln -nfs #{shared_path}/#{link} #{release_path}/#{link}" }
    end
  end
end

# our epub content, which is actually stored in another repo
set :unversioned_assets, %w{epub_content/lml58_panz_epub/lml58_panz_epub_individual}

namespace :content  do

  namespace :unversioned do

    desc "Upload our unversioned unpacked epub content"
    task :unpacked, :roles => [:app, :web] do
      # Recusively upload the all of the unpacked individual content files
      run "mkdir -p #{current_release}/epub_content/lml58_panz_epub/lml58_panz_epub_individual"
      unversioned_assets.each { |file_or_dir| upload("#{file_or_dir}", "#{current_release}/epub_content/lml58_panz_epub/", :via => :scp, :recursive => true) }
    end

    desc "Upload our unversioned unpacked epub content"
    task :compiled, :roles => [:app, :web] do
      # Upload the compiled epub, so that it's available for download
      upload("epub_content/lml58_panz_epub/lml58_panz_epub/lml58_panz_epub.epub", "#{document_root}", :via => :scp)
    end

  end
end

before "deploy:setup" do
  # assets.symlinks.setup
end

before "deploy:symlink" do
  # assets.symlinks.update
  content.unversioned.unpacked
end

after "deploy:symlink" do
  content.unversioned.compiled
end

namespace :deploy do

  task :update do
    transaction do
		  update_code
		  symlink
  	end
  end

  task :finalize_update do
    transaction do
		  run "chmod -R g+w #{releases_path}/#{release_name}"
    end
  end

  task :symlink do
    transaction do
      # Symlink to the current release from our web-served directory
      run "ln -nfs #{current_release} #{deploy_to}/#{current_dir}"
      run "ln -nfs #{deploy_to}/#{current_dir} #{document_root}"

      # Create symlinks for newzealandeducated.com's awstats
      run "ln -nfs /usr/share/awstats/icon #{document_root}/awstats-icon"
      run "ln -nfs /usr/share/awstats/icon #{document_root}/awstatsicons"
      run "ln -nfs /usr/share/awstats/icon #{document_root}/icon"
    end
  end

  task :migrate do
    # nothing
  end
 
  task :restart do
    # nothing
  end
 
#   task :start do ; end
#   task :stop do ; end
#   task :restart, :roles => :app, :except => { :no_release => true } do
#     run "#{try_sudo} touch #{File.join(current_path,'tmp','restart.txt')}"
#   end
end
