from django.core.management.base import BaseCommand
from django.contrib.auth import get_user_model

class Command(BaseCommand):
    help = 'Deletes all dummy users except SuperAdmin users'

    def handle(self, *args, **kwargs):
        User = get_user_model()

        # Count users before deletion
        total_users = User.objects.count()
        dummy_users = User.objects.exclude(role='SuperAdmin')

        dummy_count = dummy_users.count()

        if dummy_count == 0:
            self.stdout.write(self.style.SUCCESS("No dummy users found."))
            return

        # Confirm deletion
        confirm = input(f"This will delete {dummy_count} users. Are you sure? (yes/no): ")
        if confirm.lower() != 'yes':
            self.stdout.write(self.style.WARNING("Operation cancelled."))
            return

        # Delete dummy users
        dummy_users.delete()

        remaining_users = User.objects.count()

        self.stdout.write(self.style.SUCCESS(f"Deleted {dummy_count} users."))
        self.stdout.write(self.style.SUCCESS(f"Remaining users: {remaining_users} (was {total_users})"))
